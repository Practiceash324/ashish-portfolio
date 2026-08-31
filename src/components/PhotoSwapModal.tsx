import React, { useState, useRef } from 'react';
import { Camera, Upload, RefreshCw, X, Check, Image as ImageIcon, Link as LinkIcon, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRESET_PORTRAITS } from '../data/siteImages';

interface PhotoSwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onPhotoChange?: (newPhotoUrl: string) => void;
  onSavePhoto?: (newPhotoUrl: string) => void;
  onReset?: () => void;
  onResetPhoto?: () => void;
}

export const PhotoSwapModal: React.FC<PhotoSwapModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onPhotoChange,
  onSavePhoto,
  onReset,
  onResetPhoto
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'presets' | 'url'>('upload');
  const [customUrl, setCustomUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState(currentPhoto);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync preview when modal opens or currentPhoto updates
  React.useEffect(() => {
    if (isOpen) {
      setPreviewUrl(currentPhoto);
      setErrorMessage(null);
      setSuccessMessage(null);
      setIsProcessing(false);
    }
  }, [isOpen, currentPhoto]);

  if (!isOpen) return null;

  // Compress image client-side to ensure it never exceeds browser localStorage quota
  const processAndCompressImage = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (JPG, PNG, WebP, etc.).');
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const reader = new FileReader();
    reader.onerror = () => {
      setIsProcessing(false);
      setErrorMessage('Failed to read the image file. Please try another image.');
    };

    reader.onload = (e) => {
      const rawDataUrl = e.target?.result as string;
      if (!rawDataUrl) {
        setIsProcessing(false);
        setErrorMessage('Could not load image data.');
        return;
      }

      const img = new Image();
      img.onerror = () => {
        setIsProcessing(false);
        setErrorMessage('Failed to decode image.');
      };

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const maxDimension = 1200;
          let width = img.width;
          let height = img.height;

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            setPreviewUrl(rawDataUrl);
            setIsProcessing(false);
            setSuccessMessage('Photo loaded! Click "Save & Update Photo" below.');
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          // High quality JPEG compression for fast rendering and safe localStorage footprint (~100kb)
          const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setPreviewUrl(optimizedDataUrl);
          setIsProcessing(false);
          setSuccessMessage('Photo ready! Click "Save & Update Photo" to apply across the page.');
        } catch (err) {
          // Fallback to raw data url if canvas fails
          setPreviewUrl(rawDataUrl);
          setIsProcessing(false);
          setSuccessMessage('Photo loaded! Click "Save & Update Photo" below.');
        }
      };

      img.src = rawDataUrl;
    };

    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processAndCompressImage(e.target.files[0]);
      // Reset input value so re-uploading the same file works
      e.target.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processAndCompressImage(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleApply = () => {
    const finalPhoto = (activeTab === 'url' && customUrl.trim()) ? customUrl.trim() : previewUrl;
    
    if (typeof onSavePhoto === 'function') {
      onSavePhoto(finalPhoto);
    }
    if (typeof onPhotoChange === 'function') {
      onPhotoChange(finalPhoto);
    }
    onClose();
  };

  const handleTriggerReset = () => {
    if (typeof onResetPhoto === 'function') {
      onResetPhoto();
    }
    if (typeof onReset === 'function') {
      onReset();
    }
    onClose();
  };

  const handlePresetSelect = (url: string) => {
    setPreviewUrl(url);
    setSuccessMessage('Preset selected! Click "Save & Update Photo" to apply.');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl p-6 sm:p-7 border border-white/15 bg-[#10101C] text-slate-100 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Update Portrait Photo</h3>
              <p className="text-xs text-slate-400">Upload your own photo or choose a preset</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 mt-4 bg-slate-900/90 rounded-2xl border border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'upload' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Upload className="w-3.5 h-3.5" /> Upload Image
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'presets' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Professional Presets
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'url' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" /> Image Link
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 space-y-4">
          {activeTab === 'upload' && (
            <div>
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                  dragActive 
                    ? 'border-violet-400 bg-violet-500/15 scale-[0.99]' 
                    : 'border-white/20 hover:border-violet-500/60 bg-[#141424] hover:bg-[#18182c]'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 text-violet-300 mx-auto flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-white">Click or drag & drop to upload your photo</p>
                <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG, JPEG, WEBP</p>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600 border border-violet-500/40 text-violet-200 hover:text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" /> Browse Computer
                </button>
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PRESET_PORTRAITS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset.url)}
                  className={`group relative rounded-2xl overflow-hidden aspect-[4/5] border-2 transition-all cursor-pointer ${
                    previewUrl === preset.url ? 'border-violet-500 ring-2 ring-violet-500/40 scale-105' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={preset.url} alt={preset.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] font-semibold text-white truncate w-full text-left">{preset.label}</span>
                  </div>
                  {previewUrl === preset.url && (
                    <div className="absolute top-2 right-2 bg-violet-600 text-white rounded-full p-1 shadow-lg">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-2">
              <label className="text-xs text-slate-300 font-medium">Direct Image URL (HTTPS)</label>
              <input
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                value={customUrl}
                onChange={(e) => {
                  setCustomUrl(e.target.value);
                  if (e.target.value.startsWith('http')) {
                    setPreviewUrl(e.target.value);
                    setSuccessMessage('URL entered! Click "Save & Update Photo" below.');
                  }
                }}
                className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
              />
            </div>
          )}

          {isProcessing && (
            <div className="text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-2 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
              <span>Optimizing and preparing image...</span>
            </div>
          )}

          {errorMessage && (
            <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-2.5 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && !errorMessage && (
            <div className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2.5 rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Live Preview Box */}
          <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-violet-500/40 relative shadow-inner bg-slate-800 shrink-0">
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Active Photo Preview</p>
                <p className="text-[11px] text-slate-400">Click below to update permanently</p>
              </div>
            </div>
            <button
              onClick={handleTriggerReset}
              className="text-xs text-slate-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-xl border border-white/10 hover:border-amber-400/30 cursor-pointer"
              title="Restore original default photo"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Default
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2.5 text-xs font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-xl shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" /> Save & Update Photo
          </button>
        </div>
      </div>
    </div>
  );
};

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download, RotateCcw } from 'lucide-react';
import RealisticMannequin3D from './RealisticMannequin3D';

const SHIRT_COLORS = [
  { name: 'Deep Black', value: '#0f0f1e' },
  { name: 'Midnight Blue', value: '#1a1a3e' },
  { name: 'Dark Navy', value: '#0a1929' },
  { name: 'Charcoal', value: '#2a2a3e' },
  { name: 'Dark Gray', value: '#1f1f2e' },
  { name: 'Black', value: '#000000' },
];

export default function ProductCustomizer() {
  const [designImage, setDesignImage] = useState<string>('');
  const [shirtColor, setShirtColor] = useState<string>('#1a1a2e');
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setDesignImage(result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setDesignImage('');
    setShirtColor('#1a1a2e');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    alert('Download feature coming soon! Your custom design will be ready for order.');
  };

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Mannequin Display */}
        <div className="md:col-span-2">
          <div className="relative rounded-2xl neon-border bg-gradient-to-br from-card/50 to-card/20 overflow-hidden h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 grid-bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            <RealisticMannequin3D designImage={designImage} shirtColor={shirtColor} />
          </div>
        </div>

        {/* Customizer Controls */}
        <div className="space-y-6">
          {/* Design Upload Section */}
          <div className="p-6 rounded-xl neon-border bg-card/50 space-y-4">
            <h3 className="text-lg font-bold font-mono text-cyan-400">Upload Design</h3>
            
            <div 
              className="relative border-2 border-dashed neon-border rounded-lg p-6 text-center cursor-pointer hover:bg-card/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="mx-auto mb-3 text-cyan-400" size={32} />
              <p className="text-sm font-mono text-muted-foreground">
                {fileName ? (
                  <span className="text-cyan-400">✓ {fileName}</span>
                ) : (
                  <>Click to upload<br />or drag & drop</>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Shirt Color Section */}
          <div className="p-6 rounded-xl neon-border bg-card/50 space-y-4">
            <h3 className="text-lg font-bold font-mono text-magenta-400">Shirt Color</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {SHIRT_COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setShirtColor(color.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shirtColor === color.value
                      ? 'neon-border-magenta bg-magenta-500/10'
                      : 'border-border hover:border-cyan-400'
                  }`}
                  title={color.name}
                >
                  <div
                    className="w-full h-8 rounded mb-2"
                    style={{ backgroundColor: color.value }}
                  />
                  <p className="text-xs font-mono text-muted-foreground">{color.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Design Stats */}
          <div className="p-6 rounded-xl neon-border-magenta bg-card/50 space-y-3">
            <h3 className="text-lg font-bold font-mono text-magenta-400">Design Info</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className={fileName ? 'text-cyan-400 font-mono' : 'text-muted-foreground'}>
                  {fileName ? '✓ Ready' : 'No design'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shirt:</span>
                <span className="text-cyan-400 font-mono">
                  {SHIRT_COLORS.find(c => c.value === shirtColor)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quality:</span>
                <span className="text-cyan-400 font-mono">Premium</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleDownload}
              disabled={!fileName}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-background font-mono gap-2"
            >
              <Download size={16} />
              Add to Cart
            </Button>
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-magenta-500 text-magenta-400 hover:bg-magenta-500/10 font-mono gap-2"
            >
              <RotateCcw size={16} />
              Reset Design
            </Button>
          </div>

          {/* Tips */}
          <div className="p-4 rounded-lg bg-card/30 border border-border">
            <p className="text-xs text-muted-foreground">
              <span className="text-cyan-400 font-mono">💡 Tip:</span> Use high-resolution images (300 DPI) for best print quality. Recommended size: 1200x1400px.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

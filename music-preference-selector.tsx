import { Badge } from "@/components/ui/badge";

interface MusicPreferenceSelectorProps {
  selectedGenres: string[];
  onGenreChange: (genres: string[]) => void;
}

const EDM_GENRES = [
  'House', 'Techno', 'Trance', 'Dubstep', 'Drum & Bass',
  'Progressive', 'Hardstyle', 'Ambient', 'Breakbeat', 'Electro',
  'Big Room', 'Deep House', 'Tech House', 'Psytrance', 'Minimal'
];

export default function MusicPreferenceSelector({ 
  selectedGenres, 
  onGenreChange 
}: MusicPreferenceSelectorProps) {
  const toggleGenre = (genre: string) => {
    const updated = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    onGenreChange(updated);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {EDM_GENRES.map((genre) => (
        <Badge
          key={genre}
          variant={selectedGenres.includes(genre) ? "default" : "outline"}
          className={`cursor-pointer text-center justify-center py-3 transition-all duration-200 ${
            selectedGenres.includes(genre)
              ? 'bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 text-white hover:from-neon-blue hover:to-neon-purple border-none'
              : 'border-neon-blue/50 hover:border-neon-blue text-neon-blue hover:bg-neon-blue/20'
          }`}
          onClick={() => toggleGenre(genre)}
        >
          {genre}
        </Badge>
      ))}
    </div>
  );
}

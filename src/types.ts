export type KoreanInstrument =
  | 'janggu'
  | 'buk'
  | 'gayageum'
  | 'haegeum'
  | 'danso'
  | 'geomungo';

export interface Track {
  id: string;
  number: string;
  title_ko: string;
  title_en: string;
  genre: string;
  fusion_with: string;
  fusion_with_label: string;
  fusion_instrument: KoreanInstrument;
  duration_sec: number;
  duration_label: string;
  bpm: number;
  key: string;
  mood_tags: string[];
  vibe_notes: string;
  reference_artists: string[];
  generation: {
    tool: string;
    candidate_count: number;
    selected: number;
  };
  audio_url: string;
  license: string;
  published_at: string;
}

export interface Genre {
  slug: string;
  label: string;
  instrument: KoreanInstrument;
  instrument_label_ko: string;
  track_count: number;
  status: 'active' | 'coming';
}

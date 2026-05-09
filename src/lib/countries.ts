/**
 * Convert ISO 3166-1 alpha-2 country code to emoji flag.
 * Uses Unicode regional indicator letters.
 *
 * Examples:
 *   countryToFlag('KR') → 🇰🇷
 *   countryToFlag('JP') → 🇯🇵
 *   countryToFlag('US') → 🇺🇸
 */
export function countryToFlag(code: string | null | undefined): string {
  if (!code || code.length !== 2) return '';
  return code
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join('');
}

/**
 * Country code to full name mapping (for accessibility/tooltip)
 */
export const countryNames: Record<string, string> = {
  KR: 'South Korea',
  JP: 'Japan',
  CN: 'China',
  IN: 'India',
  EG: 'Egypt',
  IR: 'Iran',
  TR: 'Turkey',
  AM: 'Armenia',
  SN: 'Senegal',
  ML: 'Mali',
  ZW: 'Zimbabwe',
  NG: 'Nigeria',
  IE: 'Ireland',
  FR: 'France',
  SE: 'Sweden',
  US: 'United States',
  BR: 'Brazil',
  PE: 'Peru',
  TT: 'Trinidad and Tobago',
  BO: 'Bolivia',
  AU: 'Australia',
  PG: 'Papua New Guinea',
  CK: 'Cook Islands',
  CH: 'Switzerland',
  RU: 'Russia',
};

/**
 * Country code to Korean name (for tooltips in Korean UI)
 */
export const countryNamesKo: Record<string, string> = {
  KR: '한국',
  JP: '일본',
  CN: '중국',
  IN: '인도',
  EG: '이집트',
  IR: '이란',
  TR: '터키',
  AM: '아르메니아',
  SN: '세네갈',
  ML: '말리',
  ZW: '짐바브웨',
  NG: '나이지리아',
  IE: '아일랜드',
  FR: '프랑스',
  SE: '스웨덴',
  US: '미국',
  BR: '브라질',
  PE: '페루',
  TT: '트리니다드',
  BO: '볼리비아',
  AU: '호주',
  PG: '파푸아뉴기니',
  CK: '쿡 제도',
  CH: '스위스',
  RU: '러시아',
};

export interface TrainResult {
  id: string;
  trainName: string;
  trainNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  availability: {
    class: string;
    status: 'AVAILABLE' | 'RAC' | 'WL' | 'NOT_AVAILABLE';
    seats: number;
    price: number;
  }[];
}

export const mockTrains: TrainResult[] = [
  {
    id: "tr-1",
    trainName: "Rajdhani Express",
    trainNumber: "12951",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (MMCT)",
    departureTime: "16:55",
    arrivalTime: "08:35",
    duration: "15h 40m",
    availability: [
      { class: "1A", status: "AVAILABLE", seats: 12, price: 4250 },
      { class: "2A", status: "WL", seats: 45, price: 2850 },
      { class: "3A", status: "AVAILABLE", seats: 104, price: 2150 },
    ]
  },
  {
    id: "tr-2",
    trainName: "Tejas Rajdhani",
    trainNumber: "12953",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (MMCT)",
    departureTime: "17:15",
    arrivalTime: "08:50",
    duration: "15h 35m",
    availability: [
      { class: "1A", status: "WL", seats: 2, price: 4450 },
      { class: "2A", status: "AVAILABLE", seats: 4, price: 3050 },
      { class: "3A", status: "AVAILABLE", seats: 32, price: 2250 },
    ]
  },
  {
    id: "tr-3",
    trainName: "Paschim Express",
    trainNumber: "12926",
    from: "New Delhi (NDLS)",
    to: "Bandra Terminus (BDTS)",
    departureTime: "16:30",
    arrivalTime: "14:55",
    duration: "22h 25m",
    availability: [
      { class: "1A", status: "NOT_AVAILABLE", seats: 0, price: 3800 },
      { class: "2A", status: "RAC", seats: 15, price: 2450 },
      { class: "3A", status: "AVAILABLE", seats: 120, price: 1850 },
      { class: "SL", status: "AVAILABLE", seats: 215, price: 650 },
    ]
  }
];

export const popularStations = [
  "New Delhi (NDLS)",
  "Mumbai Central (MMCT)",
  "Howrah (HWH)",
  "Chennai Central (MAS)",
  "Bengaluru (SBC)",
  "Pune (PUNE)",
  "Ahmedabad (ADI)",
  "Jaipur (JP)",
];

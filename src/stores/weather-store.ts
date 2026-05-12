import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  TemperatureUnit,
  WeatherLocation,
} from "@/features/weather/types/weather";

export const weatherLocations: WeatherLocation[] = [
  {
    name: "อำนาจเจริญ",
    latitude: 15.8657,
    longitude: 104.6258,
    timezone: "Asia/Bangkok",
  },
  {
    name: "อ่างทอง",
    latitude: 14.5896,
    longitude: 100.4551,
    timezone: "Asia/Bangkok",
  },
  {
    name: "กรุงเทพมหานคร",
    latitude: 13.7563,
    longitude: 100.5018,
    timezone: "Asia/Bangkok",
  },
  {
    name: "บึงกาฬ",
    latitude: 18.3609,
    longitude: 103.6464,
    timezone: "Asia/Bangkok",
  },
  {
    name: "บุรีรัมย์",
    latitude: 14.993,
    longitude: 103.1029,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ฉะเชิงเทรา",
    latitude: 13.6904,
    longitude: 101.0779,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ชัยนาท",
    latitude: 15.1852,
    longitude: 100.1251,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ชัยภูมิ",
    latitude: 15.8068,
    longitude: 102.0315,
    timezone: "Asia/Bangkok",
  },
  {
    name: "จันทบุรี",
    latitude: 12.6113,
    longitude: 102.1039,
    timezone: "Asia/Bangkok",
  },
  {
    name: "เชียงใหม่",
    latitude: 18.7883,
    longitude: 98.9853,
    timezone: "Asia/Bangkok",
  },
  {
    name: "เชียงราย",
    latitude: 19.9105,
    longitude: 99.8406,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ชลบุรี",
    latitude: 13.3611,
    longitude: 100.9847,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ชุมพร",
    latitude: 10.493,
    longitude: 99.18,
    timezone: "Asia/Bangkok",
  },
  {
    name: "กาฬสินธุ์",
    latitude: 16.4385,
    longitude: 103.5061,
    timezone: "Asia/Bangkok",
  },
  {
    name: "กำแพงเพชร",
    latitude: 16.4828,
    longitude: 99.5227,
    timezone: "Asia/Bangkok",
  },
  {
    name: "กาญจนบุรี",
    latitude: 14.0228,
    longitude: 99.5328,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ขอนแก่น",
    latitude: 16.4419,
    longitude: 102.8359,
    timezone: "Asia/Bangkok",
  },
  {
    name: "กระบี่",
    latitude: 8.0863,
    longitude: 98.9063,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ลำปาง",
    latitude: 18.2888,
    longitude: 99.4909,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ลำพูน",
    latitude: 18.5745,
    longitude: 99.0087,
    timezone: "Asia/Bangkok",
  },
  {
    name: "เลย",
    latitude: 17.486,
    longitude: 101.7223,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ลพบุรี",
    latitude: 14.7995,
    longitude: 100.6534,
    timezone: "Asia/Bangkok",
  },
  {
    name: "แม่ฮ่องสอน",
    latitude: 19.301,
    longitude: 97.9654,
    timezone: "Asia/Bangkok",
  },
  {
    name: "มหาสารคาม",
    latitude: 16.1851,
    longitude: 103.3026,
    timezone: "Asia/Bangkok",
  },
  {
    name: "มุกดาหาร",
    latitude: 16.5424,
    longitude: 104.7209,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครนายก",
    latitude: 14.2069,
    longitude: 101.2131,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครปฐม",
    latitude: 13.8199,
    longitude: 100.0622,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครพนม",
    latitude: 17.392,
    longitude: 104.7696,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครราชสีมา",
    latitude: 14.9799,
    longitude: 102.0977,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครสวรรค์",
    latitude: 15.7047,
    longitude: 100.1372,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นครศรีธรรมราช",
    latitude: 8.4325,
    longitude: 99.9599,
    timezone: "Asia/Bangkok",
  },
  {
    name: "น่าน",
    latitude: 18.7756,
    longitude: 100.773,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นราธิวาส",
    latitude: 6.4255,
    longitude: 101.8253,
    timezone: "Asia/Bangkok",
  },
  {
    name: "หนองบัวลำภู",
    latitude: 17.2218,
    longitude: 102.426,
    timezone: "Asia/Bangkok",
  },
  {
    name: "หนองคาย",
    latitude: 17.8783,
    longitude: 102.7413,
    timezone: "Asia/Bangkok",
  },
  {
    name: "นนทบุรี",
    latitude: 13.8621,
    longitude: 100.5144,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ปทุมธานี",
    latitude: 14.0208,
    longitude: 100.525,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ปัตตานี",
    latitude: 6.8695,
    longitude: 101.2501,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พังงา",
    latitude: 8.4501,
    longitude: 98.5255,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พัทลุง",
    latitude: 7.6167,
    longitude: 100.0833,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พะเยา",
    latitude: 19.1665,
    longitude: 99.9018,
    timezone: "Asia/Bangkok",
  },
  {
    name: "เพชรบูรณ์",
    latitude: 16.419,
    longitude: 101.1606,
    timezone: "Asia/Bangkok",
  },
  {
    name: "เพชรบุรี",
    latitude: 13.1112,
    longitude: 99.9397,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พิจิตร",
    latitude: 16.4429,
    longitude: 100.3482,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พิษณุโลก",
    latitude: 16.8211,
    longitude: 100.2659,
    timezone: "Asia/Bangkok",
  },
  {
    name: "พระนครศรีอยุธยา",
    latitude: 14.3532,
    longitude: 100.5689,
    timezone: "Asia/Bangkok",
  },
  {
    name: "แพร่",
    latitude: 18.1446,
    longitude: 100.1403,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ภูเก็ต",
    latitude: 7.8804,
    longitude: 98.3923,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ปราจีนบุรี",
    latitude: 14.0509,
    longitude: 101.3727,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ประจวบคีรีขันธ์",
    latitude: 11.8124,
    longitude: 99.7973,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ระนอง",
    latitude: 9.9529,
    longitude: 98.6085,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ราชบุรี",
    latitude: 13.5283,
    longitude: 99.8134,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ระยอง",
    latitude: 12.6814,
    longitude: 101.2816,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ร้อยเอ็ด",
    latitude: 16.0538,
    longitude: 103.652,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สระแก้ว",
    latitude: 13.824,
    longitude: 102.0646,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สกลนคร",
    latitude: 17.1546,
    longitude: 104.1348,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สมุทรปราการ",
    latitude: 13.5991,
    longitude: 100.5998,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สมุทรสาคร",
    latitude: 13.5475,
    longitude: 100.2744,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สมุทรสงคราม",
    latitude: 13.4098,
    longitude: 100.0023,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สระบุรี",
    latitude: 14.5289,
    longitude: 100.9101,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สตูล",
    latitude: 6.6238,
    longitude: 100.0674,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สิงห์บุรี",
    latitude: 14.8936,
    longitude: 100.3967,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ศรีสะเกษ",
    latitude: 15.1186,
    longitude: 104.322,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สงขลา",
    latitude: 7.1898,
    longitude: 100.5951,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สุโขทัย",
    latitude: 17.0056,
    longitude: 99.8264,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สุพรรณบุรี",
    latitude: 14.4745,
    longitude: 100.1177,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สุราษฎร์ธานี",
    latitude: 9.1382,
    longitude: 99.3215,
    timezone: "Asia/Bangkok",
  },
  {
    name: "สุรินทร์",
    latitude: 14.8829,
    longitude: 103.4937,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ตาก",
    latitude: 16.8839,
    longitude: 99.1258,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ตรัง",
    latitude: 7.5594,
    longitude: 99.6114,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ตราด",
    latitude: 12.2428,
    longitude: 102.5175,
    timezone: "Asia/Bangkok",
  },
  {
    name: "อุบลราชธานี",
    latitude: 15.2448,
    longitude: 104.8473,
    timezone: "Asia/Bangkok",
  },
  {
    name: "อุดรธานี",
    latitude: 17.4138,
    longitude: 102.7872,
    timezone: "Asia/Bangkok",
  },
  {
    name: "อุทัยธานี",
    latitude: 15.3835,
    longitude: 100.0246,
    timezone: "Asia/Bangkok",
  },
  {
    name: "อุตรดิตถ์",
    latitude: 17.6201,
    longitude: 100.0993,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ยะลา",
    latitude: 6.5411,
    longitude: 101.2804,
    timezone: "Asia/Bangkok",
  },
  {
    name: "ยโสธร",
    latitude: 15.7926,
    longitude: 104.1453,
    timezone: "Asia/Bangkok",
  },
];

type WeatherState = {
  selectedLocation: WeatherLocation;
  setSelectedLocation: (location: WeatherLocation) => void;
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
};

type PersistedWeatherState = Partial<
  Pick<WeatherState, "selectedLocation" | "unit">
>;

function resolvePersistedLocation(location?: WeatherLocation) {
  if (!location) {
    return weatherLocations[0];
  }

  return (
    weatherLocations.find(
      (item) =>
        item.latitude === location.latitude &&
        item.longitude === location.longitude,
    ) ?? location
  );
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      selectedLocation: weatherLocations[0],
      setSelectedLocation: (location) => set({ selectedLocation: location }),
      unit: "celsius",
      setUnit: (unit) => set({ unit }),
    }),
    {
      name: "weather-dashboard-settings",
      version: 2,
      migrate: (persistedState) => {
        const state = persistedState as PersistedWeatherState;

        return {
          ...state,
          selectedLocation: resolvePersistedLocation(state.selectedLocation),
        };
      },
      partialize: (state) => ({
        selectedLocation: state.selectedLocation,
        unit: state.unit,
      }),
    },
  ),
);

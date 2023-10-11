import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  username: string;
  token: string;
};

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User | null) => void;
};

const useUser = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set(() => ({ user })),
    }),
    {
      name: "username-state-key-in-asyncstorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUser;

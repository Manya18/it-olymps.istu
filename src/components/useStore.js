import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    parseValuesArray:[],
    diploms:[],
    index: 0,
    fontSize: 20,
    format: false,
    fontColor: 'black',
    exportFileName: '',
    xpos: 50,
    ypos: 50,
    setNameImage: (a) => set((state) => ({ nameImage: a })),
    setParseValuesArray: (a) => set((state) => ({parseValuesArray: a})),
    setDiploms: (a) => set((state) => ({diploms: a})),
    setIndex: (a) => set((state) => ({ index: a })),
    setFormat: (a) => set((state) => ({ format: a })),
    setFontSize: (a) => set((state) => ({ fontSize: a })),
    setFontColor: (a) => set((state) => ({ fontColor: a })),
    setExportFileName: (a) => set((state) => ({ exportFileName: a })),
    setXpos: (a) => set(() => ({ xpos: a })),
    setYpos: (a) => set(() => ({ ypos: a })),
   }))

   export default useStore;

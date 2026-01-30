import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 
import type { ProductType, ShopCardType } from "../@types";

interface InitialStateType {
  data: ShopCardType[];
}

const getStoredData = (): ShopCardType[] => {
  const storedData = localStorage.getItem("shop");
  if (!storedData) return [];
  try {
    return JSON.parse(storedData);
  } catch (error) {
    return [];
  }
};

const initialState: InitialStateType = {
  data: getStoredData(),
};

const shopSlice = createSlice({
  name: "shop-slice",
  initialState,
  reducers: {
    getData(state, { payload }: PayloadAction<ProductType>) {
      const isExist = state.data.find((item) => item._id === payload._id);
      
      if (isExist) {
        state.data = state.data.map((item) => {
          if (item._id === payload._id) {
            const newCounter = (item.counter || 1) + 1;
            return {
              ...item,
              counter: newCounter,
              userPrice: item.price * newCounter,
            };
          }
          return item;
        });
      } else {
        state.data = [...state.data, {
          ...payload, 
          counter: 1, 
          userPrice: payload.price
        }];
      }
      
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    
    removeItem(state, { payload }: PayloadAction<string>) {
      state.data = state.data.filter((item) => item._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    
    decreaseQuantity(state, { payload }: PayloadAction<string>) {
      state.data = state.data.map((item) => {
        if (item._id === payload) {
          const newCounter = Math.max(1, (item.counter || 1) - 1);
          return {
            ...item,
            counter: newCounter,
            userPrice: item.price * newCounter,
          };
        }
        return item;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    
    updateQuantity(state, { payload }: PayloadAction<{id: string; quantity: number}>) {
      state.data = state.data.map((item) => {
        if (item._id === payload.id) {
          const newCounter = Math.max(1, payload.quantity);
          return {
            ...item,
            counter: newCounter,
            userPrice: item.price * newCounter,
          };
        }
        return item;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    deleteData(state, { payload }: PayloadAction<string>) {
      state.data = state.data.filter(value => value._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },
    
    clearCart(state) {
      state.data = [];
      localStorage.removeItem("shop");
    },
    
    // ✅ TO'G'RILANDI: increment deb nomlandi va logikasi to'g'rilandi
    increment(state, { payload }: PayloadAction<string>) {
      state.data = state.data.map((value) => {
        if (value._id === payload) { // ✅ `_id` (chiziqcha bilan)
          const newCounter = (value.counter || 1) + 1;
          return {
            ...value,
            counter: newCounter,
            userPrice: value.price * newCounter, // ✅ yangi counter bilan ko'paytirish
          };
        }
        return value;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    }
  },
});

// ✅ TO'G'RI EXPORT QILINDI
export const { 
  getData, 
  deleteData, 
  increment,  // ✅ "increment" deb export qilindi
  removeItem, 
  decreaseQuantity, 
  updateQuantity, 
  clearCart 
} = shopSlice.actions;

export default shopSlice.reducer;

import { supabase } from "@/integrations/supabase/client";
import type { Medicine, MedicineCategory, SymptomCategory } from "../types";

export const getSymptomMedicines = async (symptom: SymptomCategory): Promise<Medicine[]> => {
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .eq('symptom', symptom);
    
  if (error) {
    console.error('Error fetching medicines:', error);
    return [];
  }
  
  return data || [];
};

export const getCategoryMedicines = async (category: MedicineCategory): Promise<Medicine[]> => {
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .eq('category', category);
    
  if (error) {
    console.error('Error fetching medicines:', error);
    return [];
  }
  
  return data || [];
};

export const getMedicineById = async (id: string): Promise<Medicine | null> => {
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error fetching medicine:', error);
    return null;
  }
  
  return data;
};

export const searchMedicines = async (query: string): Promise<Medicine[]> => {
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .or(`name.ilike.%${query}%, description.ilike.%${query}%, active_ingredient.ilike.%${query}%`)
    .limit(50);
    
  if (error) {
    console.error('Error searching medicines:', error);
    return [];
  }
  
  return data || [];
};

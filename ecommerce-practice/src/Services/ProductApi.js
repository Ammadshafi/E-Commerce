
import axios from 'axios'
export const productData = async (filcat) => {
    const {data} = await axios(
      `https://fakestoreapi.com/products/${filcat}`
      );
      return data
    
  };
  export const categoryData = async () => {
    const {data} = await axios("https://fakestoreapi.com/products/categories");
      return data
    
  };
  export const productById = async (id) => {
    const{data} = await axios(`https://fakestoreapi.com/products/${id}`  );
    return data
     
  };


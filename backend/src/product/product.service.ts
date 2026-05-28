import { Injectable } from '@nestjs/common';
import { products, Product } from '../data/mock_data';
import {
    ProductListResponseDto,
    ProductResponseDto,
    UpdateProductRequestDto, CreateProductRequestDto
} from './product.dto';

@Injectable()
export class ProductService {
  getAll(): ProductListResponseDto {
    return { items: products };
  }

  getById(id: number): ProductResponseDto {
    const product = products.find((item: Product) => item.id === id);

    if (!product) {
      throw new Error('No product with this id exists');
    }

    return product;
  }

  create({
    name,
    unit,
    pricePerUnit,
  }: CreateProductRequestDto): ProductResponseDto {
    const newProduct = {
      id: Math.max(...products.map((item: Product) => item.id)) + 1,
      name,
      unit,
      pricePerUnit,
    };
    products.push(newProduct);
    return newProduct;
  }

  updateById(
    id: number,
    { name, unit, pricePerUnit }: UpdateProductRequestDto,
  ): ProductResponseDto {
    throw new Error('not yet implemented');
  }

  deleteById(id: number): void {
    throw new Error('not yet implemented');
  }
}

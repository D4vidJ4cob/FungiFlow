export class CreateProductRequestDto {
  name: string;
  unit: string;
  pricePerUnit: number;
}

export class UpdateProductRequestDto extends CreateProductRequestDto {}

export class ProductResponseDto extends CreateProductRequestDto {
  id: number;
}

export class ProductListResponseDto {
  items: ProductResponseDto[];
}

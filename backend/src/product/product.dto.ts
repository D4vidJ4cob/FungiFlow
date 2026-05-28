export class CreateProductrequestDto {
  name: string;
  unit: string;
  pricePerUnit: number;
}

export class UpdateProductRequestDto extends CreateProductrequestDto {}

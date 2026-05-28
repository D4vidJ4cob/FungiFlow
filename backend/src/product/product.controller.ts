import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {
    CreateProductRequestDto,
    ProductListResponseDto,
    ProductResponseDto,
    UpdateProductRequestDto,
} from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): ProductListResponseDto {
    return this.productService.getAll();
  }

  @Get(':id')
  getPlaceById(@Param('id') id: string): ProductResponseDto {
    return this.productService.getById(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(
    @Body() createProductDto: CreateProductRequestDto,
  ): ProductResponseDto {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductRequestDto,
  ): string {
    return `This action updates a product for ${updateProductDto.name} with #${id}`;
  }

  @Delete('id')
  deleteProduct(@Param('id') id: string) {
    return `This action removes the product with id #${id}`;
  }
}

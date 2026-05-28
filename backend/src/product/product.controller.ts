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
    CreateProductrequestDto,
    UpdateProductRequestDto,
} from './product.dto';
import { PaginationQuery } from '../common/common.dto';

@Controller('products')
export class ProductController {
  @Get()
  getAllProducts(paginationQuery: PaginationQuery): string {
    const { page, limit } = paginationQuery;
    return `This action returns all products. Limit ${limit}, page: ${page}`;
  }

  @Get(':id')
  getPlaceById(@Param('id') id: string): string {
    return `This action returns a #${id} place`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() createProductDto: CreateProductrequestDto): string {
    return `This action adds a new product for ${createProductDto.name}`;
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

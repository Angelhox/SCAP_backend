import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { CreateMedidorDto } from 'src/medidor/dto/create-medidor.dto';

export class CreateServicioContratadoDto {
  @IsOptional()
  @IsDateString()
  fechaEmision: Date;
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  estado: string;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  valorIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  numeroPagosIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  valorPagosIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  descuentoValor: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  contratosId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  serviciosId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  descuentosId: number;
}
export class CreateMedidorServicioContratadoDto {
  @IsOptional()
  @IsDateString()
  fechaEmision: Date;
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  estado: string;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  valorIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  numeroPagosIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  valorPagosIndividual: number;
  @IsNotEmpty()
  @IsNumber()
  //   @IsDecimal()
  descuentoValor: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  contratosId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  serviciosId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  descuentosId: number;
  medidor: CreateMedidorDto;
}

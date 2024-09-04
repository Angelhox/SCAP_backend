import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
enum IsBase {
  'Base' = 1,
  'Otro' = 0,
}
export class CreateServicioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  nombre: string;
  @IsString()
  @MaxLength(100)
  @Transform(({ value }) => value.trim())
  descripcion?: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @Transform(({ value }) => value.trim())
  tipo: string;
  @IsNotEmpty()
  @IsNumber()
  valor: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  aplazableSn: string;
  @IsDateString()
  @IsNotEmpty()
  fechaCreacion: Date;
  @IsNumber()
  @IsNotEmpty()
  numeroPagos: number;
  @IsNumber()
  @IsNotEmpty()
  valorPagos: number;
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  valoresDistintosSn: string;
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  individualSn: string;
  @IsOptional()
  @IsEnum(IsBase)
  base: number;
}

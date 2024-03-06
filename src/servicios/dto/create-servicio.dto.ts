import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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
  @IsNumber()
  @IsNotEmpty()
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
}

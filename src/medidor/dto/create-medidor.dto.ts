import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateMedidorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  codigo: string;
  @IsNotEmpty()
  @IsDateString()
  fechaInstalacion: Date;
  @IsNotEmpty()
  @IsString()
  @MaxLength(35)
  @Transform(({ value }) => value.trim())
  marca: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  @Transform(({ value }) => value.trim())
  observacion: string;
}

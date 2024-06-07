import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  @MaxLength(20)
  usuario: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  @MaxLength(255)
  clave: string;
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => value.trim())
  fechaModificacion: Date;
}

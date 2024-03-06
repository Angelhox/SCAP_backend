import { Transform } from 'class-transformer';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  @Transform(({ value }) => value.trim())
  clave: string;
}

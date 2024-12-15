import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateMedidorDto } from './create-medidor.dto';
import { UpdateMedidorDto } from './update-medidor.dto';

export class ChangeMedidorDto {
  @ValidateNested()
  @Type(() => CreateMedidorDto)
  @IsNotEmpty()
  newMedidor: CreateMedidorDto;
  @ValidateNested()
  @Type(() => UpdateMedidorDto)
  @IsNotEmpty()
  updateMedidor: UpdateMedidorDto;
}

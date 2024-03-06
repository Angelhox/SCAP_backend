import { PartialType } from '@nestjs/mapped-types';
import { CreateKardexDto } from './create-kardex.dto';

export class UpdateKardexDto extends PartialType(CreateKardexDto) {}

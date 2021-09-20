import { IsNotEmpty, IsOptional } from 'class-validator';

export class SeederDto {
  @IsNotEmpty()
  klass: string;
  @IsOptional()
  up: boolean = true;
}

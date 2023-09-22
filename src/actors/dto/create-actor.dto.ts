import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateActorDto {
  @IsString()
  readonly name: string;

  @IsDate()
  readonly born: Date;

  @IsDate()
  @IsOptional()
  readonly died?: Date;

  // You can include validation for the roles array if needed
  // For example:
  // @IsArray()
  // @IsString({ each: true })
  // @IsOptional()
  //  readonly roles?: string[];
}

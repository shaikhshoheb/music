import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateActorDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsDate()
  readonly born?: Date;

  @IsOptional()
  @IsDate()
  readonly died?: Date;

  // You can include validation for the roles array if needed
  // For example:
  // @IsArray()
  // @IsString({ each: true })
  // readonly roles?: string[];
}

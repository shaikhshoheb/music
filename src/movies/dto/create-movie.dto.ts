import { IsString, IsDate } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  rating_classification: string;

  @IsString()
  description: string;

  @IsDate()
  release_date: Date;
}

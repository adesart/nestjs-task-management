import { IsNotEmpty } from 'class-validator'; // aggiunta

export class CreateTaskDto {
  @IsNotEmpty() // aggiunta
  title: string;

  @IsNotEmpty() // aggiunta
  description: string;
}

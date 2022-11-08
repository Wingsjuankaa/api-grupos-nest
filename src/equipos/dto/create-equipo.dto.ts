import { ApiProperty } from '@nestjs/swagger';
export class CreateEquipoDto {
  @ApiProperty({
    example: 'CPU',
  })
  readonly nombre: string;

  @ApiProperty({
    example: 'true',
  })
  readonly estado: boolean;
}

import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquiposService {
  private readonly logger = new Logger('EquiposService');
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}
  async create(createEquipoDto: CreateEquipoDto) {
    try {
      const response = this.equipoRepository.create(createEquipoDto);
      await this.equipoRepository.save(response);
      return response;
    } catch (error) {
      this.handleDBExceptions(error);
      return null;
    }
  }

  async findAll() {
    const response = await this.equipoRepository.find();
    return response;
  }

  async findOne(id: number) {
    try {
      const response = await this.equipoRepository.findOneBy({ id });
      return response;
    } catch (error) {
      this.handleDBExceptions(error);
      return null;
    }
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
    try {
      const response = await this.findOne(id);
      this.equipoRepository.merge(response, updateEquipoDto);
      return this.equipoRepository.save(response);
    } catch (error) {
      this.handleDBExceptions(error);
      return null;
    }
  }

  async remove(id: number) {
    try {
      const response = await this.findOne(id);
      await this.equipoRepository.remove(response);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}

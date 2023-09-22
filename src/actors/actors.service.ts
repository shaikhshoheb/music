import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './entities/actor.entity';


@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor)
    private actorRepository: Repository<Actor>,
  ) {}

  create(createActorDto: CreateActorDto) {
    return this.actorRepository.save(this.actorRepository.create(createActorDto));
  }

 

  findAll() {
    return this.actorRepository.find()
  }

  findOne(id: number) {
    return  this.actorRepository.findOneBy({
      person_id:id
    })
  }

  async update(id: number, updateActorDto: UpdateActorDto) {
    const existingActor = await this.actorRepository.findOneBy({person_id:id})

    if (!existingActor) {
      throw new NotFoundException('Actor not found');
    }

    // Update the actor properties based on the DTO
    if (updateActorDto.name !== undefined) {
      existingActor.name = updateActorDto.name;
    }

    if (updateActorDto.born !== undefined) {
      existingActor.born = updateActorDto.born;
    }

    if (updateActorDto.died !== undefined) {
      existingActor.died = updateActorDto.died;
    }

    // Save the updated actor back to the database
    return this.actorRepository.save(existingActor);
  }


  
}

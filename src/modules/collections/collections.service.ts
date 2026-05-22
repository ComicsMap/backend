import { Collection, User } from '@comics-map/shared/entities';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: EntityRepository<Collection>,
  ) {}

  public initUserCollection(user: User) {
    this.collectionRepository.create({ owner: user });
  }
}

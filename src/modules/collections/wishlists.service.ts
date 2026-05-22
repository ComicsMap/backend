import { User, Wishlist } from '@comics-map/shared/entities';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: EntityRepository<Wishlist>,
  ) {}

  public initUserWishlist(user: User) {
    this.wishlistRepository.create({ owner: user });
  }
}

import { Wishlist } from '@entities/users/collections/wishlist.entity';
import { User } from '@entities/users/user.entity';
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

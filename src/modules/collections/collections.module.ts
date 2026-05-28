import { CollectionIssue } from '@entities/users/collections/collection-issue.entity';
import { Collection } from '@entities/users/collections/collection.entity';
import { CustomCollectionIssue } from '@entities/users/collections/custom-collection-issue.entity';
import { CustomCollection } from '@entities/users/collections/custom-collection.entity';
import { WishlistIssue } from '@entities/users/collections/wishlist-issue.entity';
import { Wishlist } from '@entities/users/collections/wishlist.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CollectionsService } from '@modules/collections/collections.service';
import { WishlistsService } from '@modules/collections/wishlists.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CollectionsService, WishlistsService],
  exports: [CollectionsService, WishlistsService],
  imports: [
    MikroOrmModule.forFeature([
      Collection,
      CollectionIssue,
      CustomCollection,
      CustomCollectionIssue,
      Wishlist,
      WishlistIssue,
    ]),
  ],
})
export class CollectionsModule {}

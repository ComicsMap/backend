import {
  Collection,
  CollectionIssue,
  CustomCollection,
  CustomCollectionIssue,
  Wishlist,
  WishlistIssue,
} from '@comics-map/shared/entities';
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

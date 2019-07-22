import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: UserEntity,
  },
})

@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) {}
}

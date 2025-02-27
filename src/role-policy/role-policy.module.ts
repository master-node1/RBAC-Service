import { Module } from '@nestjs/common';
import { RolePolicyService } from './role-policy.service';
import { RolePolicyController } from './role-policy.controller';

@Module({
  providers: [RolePolicyService],
  controllers: [RolePolicyController]
})
export class RolePolicyModule {}

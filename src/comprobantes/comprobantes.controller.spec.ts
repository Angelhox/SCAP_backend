import { Test, TestingModule } from '@nestjs/testing';
import { ComprobantesController } from './comprobantes.controller';
import { ComprobantesService } from './comprobantes.service';

describe('ComprobantesController', () => {
  let controller: ComprobantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprobantesController],
      providers: [ComprobantesService],
    }).compile();

    controller = module.get<ComprobantesController>(ComprobantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

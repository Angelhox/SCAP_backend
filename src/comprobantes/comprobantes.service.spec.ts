import { Test, TestingModule } from '@nestjs/testing';
import { ComprobantesService } from './comprobantes.service';

describe('ComprobantesService', () => {
  let service: ComprobantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComprobantesService],
    }).compile();

    service = module.get<ComprobantesService>(ComprobantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

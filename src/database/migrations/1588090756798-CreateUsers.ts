import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1588090756798 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            comment: 'chave do registro',
          },
          {
            name: 'name',
            type: 'varchar',
            comment: 'nome do usuario',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            comment: 'email do usuario',
          },
          {
            name: 'password',
            type: 'varchar',
            comment: 'senha',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

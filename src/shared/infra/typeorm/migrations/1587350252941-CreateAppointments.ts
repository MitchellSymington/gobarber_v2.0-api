import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587350252941
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
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
            name: 'provider',
            type: 'varchar',
            comment: 'nome do prestador de serviço',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            comment: 'data do agendamento',
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
    await queryRunner.dropTable('appointments');
  }
}

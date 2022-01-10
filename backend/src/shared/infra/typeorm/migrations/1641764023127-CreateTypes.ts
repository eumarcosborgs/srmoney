import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTypes1641764023127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'types',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'user_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'CreateTypesInUser',
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('types');
    }

}

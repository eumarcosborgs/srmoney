import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddFieldTypesToMonths1641764390733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'months',
        new TableColumn({
          name: 'type_id',
          type: 'uuid',
          isNullable: true,
        })
      );

      await queryRunner.createForeignKey(
        'months',
        new TableForeignKey({
          name: 'AddFieldTypesToMonthsInType',
          columnNames: ['type_id'],
          referencedTableName: 'types',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('months', 'type_id');
      await queryRunner.dropForeignKey('months', 'AddFieldTypesToMonthsInType');
    }

}

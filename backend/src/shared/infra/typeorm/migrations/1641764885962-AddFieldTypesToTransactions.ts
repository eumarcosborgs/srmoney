import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddFieldTypesToTransactions1641764885962 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'type_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'transactions',
      new TableForeignKey({
        name: 'AddFieldTypesToTransactionsInType',
        columnNames: ['type_id'],
        referencedTableName: 'types',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transactions', 'type_id');
    await queryRunner.dropForeignKey('transactions', 'AddFieldTypesToMonthsInType');
  }

}

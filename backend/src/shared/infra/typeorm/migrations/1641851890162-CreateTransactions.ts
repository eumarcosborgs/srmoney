import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1641851890162 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'type_transaction',
            type: 'varchar'
          },
          {
            name: 'category',
            type: 'varchar'
          },
          {
            name: 'amount',
            type: 'numeric'
          },
          {
            name: 'date',
            type: 'timestamp'
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'type_id',
            type: 'int',
          },
          {
            name: 'month_id',
            type: 'uuid',
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
            name: 'CreateTransactionsInUser',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'CreateTransactionsInType',
            columnNames: ['type_id'],
            referencedTableName: 'types',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'CreateTransactionsInMonth',
            columnNames: ['month_id'],
            referencedTableName: 'months',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }

}

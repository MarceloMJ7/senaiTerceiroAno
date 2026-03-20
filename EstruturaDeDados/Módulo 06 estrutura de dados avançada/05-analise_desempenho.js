//Compare o desempenho de inserção e busca entre uma árvore B e uma árvore AVL com o mesmo conjunto de dados. Qual delas oferece melhor
//performance quando o conjunto de dados é muito grande?
//○ Com base no comportamento da árvore B, explique por que ela é preferida para sistemas de banco de dados em vez de árvores AVL ou Red-Black.

//Ao comparar árvores B e árvores AVL, ambas apresentam complexidade de tempo O(log n) para operações de busca e inserção. Entretanto, a árvore B possui uma altura significativamente menor, pois cada nó pode armazenar várias chaves e possuir múltiplos filhos. Isso reduz o número de níveis que precisam ser percorridos durante as operações.

//Quando o conjunto de dados é muito grande, a árvore B apresenta melhor desempenho, principalmente em sistemas que realizam acesso em disco. Por essa razão, estruturas baseadas em árvore B são amplamente utilizadas em sistemas de banco de dados. Diferentemente das árvores AVL ou Red-Black, que armazenam poucas chaves por nó, a árvore B permite agrupar vários valores em um único nó, reduzindo o número de acessos ao disco e tornando as operações de busca e inserção mais eficientes.

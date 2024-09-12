const Biblioteca =  require("../src/Trabalho01Turma02");


describe('Biblioteca', () => {
	let biblioteca;
	
	beforeEach(() => {
		biblioteca = new Biblioteca();
	});

	test('adicionarLivro should add a livro to the biblioteca', () => {
		const livro = { id: 1, title: 'a lenda', content: 'uma vez aconteceu pah e tal. fim.'};

		biblioteca.adicionarLivro(livro);
		expect(biblioteca.livros).toContain(livro);
	});

	test('adicionarLivro e remover nao deve ter mais livro na biblioteca', () => {
		const livro = { id: 1, title: 'a lenda', content: 'uma vez aconteceu pah e tal. fim.'};

		biblioteca.adicionarLivro(livro);
		biblioteca.removerLivro(livro.id);

		expect(biblioteca.livros).not.toContain(livro);
	});

	test('adicionarLivro e buscarLivroPorId deve retornar o livro', () => {
		const livro = { id: 1, titulo: 'a lenda'};

		biblioteca.adicionarLivro(livro);
		const resultado = biblioteca.buscarLivroPorId(livro.id);

		expect(resultado).toBe(livro);
	});

	test('adicionarLivro e buscarLivroPorTitulo deve retornar o livro', () => {
		const livro = { id: 1, titulo: 'a lenda'};

		biblioteca.adicionarLivro(livro);
		const resultado = biblioteca.buscarLivroPorTitulo(livro.titulo);

		expect(resultado).toContain(livro);
	});

	test('adicionarLivro duas vezes e listarLivros deve retornar livros', () => {
		const livro1 = { id: 1, titulo: 'a lenda'};
		const livro2 = { id: 2, titulo: 'a lenda 2'};


		biblioteca.adicionarLivro(livro1);
		biblioteca.adicionarLivro(livro2);
		const resultado = biblioteca.listarLivros();

		expect(resultado).toContain(livro1);
		expect(resultado).toContain(livro2);

	});

	test('adicionarMembro deve adicionar um membro na biblioteca', () => {
		const membro = {id: 1};
		
		biblioteca.adicionarMembro(membro);

		expect(biblioteca.membros).toContain(membro);

	});

	test('adicionarMembro e remverMembro deve remover o membro da biblioteca', () => {
		const membro = {id: 1};
		
		biblioteca.adicionarMembro(membro);
		biblioteca.removerMembro(membro.id);


		expect(biblioteca.membros).not.toContain(membro);

	});

	test('adicionarMembro e buscarMembroPorId deve retornar o membro', () => {
		const membro = {id: 1};
		
		biblioteca.adicionarMembro(membro);
		const resultado = biblioteca.buscarMembroPorId(membro.id);


		expect(resultado).toBe(membro);

	});

	test('adicionarMembro 2 vezes e listarMembros deve retornar os membros', () => {
		const membro = {id: 1};
		const membro2 = {id: 2};

		
		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarMembro(membro2);
		const resultado = biblioteca.listarMembros();


		expect(resultado).toContain(membro);
		expect(resultado).toContain(membro2);

	});

	test('emprestar livro nao emprestado deve retornar true', () => {
		const membro = {id: 1};
		const livro = {id: 1, titulo: 'aa', emprestado: false};

		
		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarLivro(livro);
		const resultado = biblioteca.emprestarLivro(livro.id, membro.id);

		expect(resultado).toBe(true);

	});

	test('emprestar livro emprestado deve retornar false', () => {
		const membro = {id: 1};
		const livro = {id: 1, titulo: 'aa', emprestado: true};

		
		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarLivro(livro);
		const resultado = biblioteca.emprestarLivro(livro.id, membro.id);

		expect(resultado).toBe(false);

	});

	test('emprestar livro e listar livros emprestados deve retornar livro', () => {
		const membro = {id: 1};
		const livro = {id: 1, titulo: 'aa', emprestado: true};

		
		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarLivro(livro);
		biblioteca.emprestarLivro(livro.id, membro.id);
		const resultado = biblioteca.listarLivrosEmprestados();

		expect(resultado).toContain(livro);
	});

	test('devolver livro emprestados deve retornar true', () => {
		const membro = {id: 1};
		const livro = {id: 1, titulo: 'aa', emprestado: true};

		
		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarLivro(livro);
		biblioteca.emprestarLivro(livro.id, membro.id);
		const resultado = biblioteca.devolverLivro(livro.id);

		expect(resultado).toBe(true);
	});


	test('devolver livro nao emprestados deve retornar false assim devolver um livro que nao existe', () => {
		const membro = {id: 1};
		const livro = {id: 1, titulo: 'aa', emprestado: false};

		biblioteca.adicionarMembro(membro);
		biblioteca.adicionarLivro(livro);
		const resultadoComIdCorreto = biblioteca.devolverLivro(livro.id);
		const resultadoComIdErrado = biblioteca.devolverLivro(2);


		expect(resultadoComIdCorreto).toBe(false);
		expect(resultadoComIdErrado).toBe(false);
	});

	test('listarLivrosDisponiveis deve retornar somente livros nao emprestados', () => {
		const livro = {id: 1, titulo: 'aa', emprestado: false};
		const livro2 = {id: 2, titulo: 'bb', emprestado: false};

		biblioteca.adicionarLivro(livro);
		biblioteca.adicionarLivro(livro2);
		const resultado = biblioteca.listarLivrosDisponiveis();

		expect(resultado).toContain(livro);
		expect(resultado).toContain(livro2);
	});

});

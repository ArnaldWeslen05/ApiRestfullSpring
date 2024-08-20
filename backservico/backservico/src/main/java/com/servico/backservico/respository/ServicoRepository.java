package com.servico.backservico.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servico.backservico.models.Servico;

public interface ServicoRepository extends JpaRepository<Servico,Long>{

    
    
}

package com.servico.backservico.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.servico.backservico.models.Servico;

public interface ServicoRepository extends JpaRepository<Servico,Long>{

    @Query("select s from Servico s where s.valorPago <> null and s.valorPago >0")
    List<Servico> buscarServicosPagamentoPendente(); 

    @Query("select s from Servico s where s.status = 'cancelado' ")
    List<Servico> buscarServicosCancelados(); 
    
}
